import { CommunicationColors, NeutralColors } from '@fluentui/theme/lib/colors/FluentColors';
import { StockCandle } from 'besthack_exchange_api_typings_and_utils';
import { createChart, CrosshairMode, UTCTimestamp } from 'lightweight-charts';
import React, { FC, useEffect, useRef } from 'react';

import { COLORS } from '../../constants/styles';

export type ChartType = 'candle' | 'bar' | 'line' | 'area';

interface ChartProps {
    data: StockCandle[];
    type: ChartType;
    withVolume?: boolean;
}

interface LightweightStockCandle extends StockCandle {
    time: UTCTimestamp;
}

const prepareData = (type: ChartType | 'volume', data: StockCandle[]): LightweightStockCandle[] => {
    if (type === 'line' || type === 'area') {
        return data.map((candle) => ({
            ...candle,
            time: candle.time as UTCTimestamp,
            value: candle.close,
        }));
    }

    return data.map((candle) => ({ ...candle, time: candle.time as UTCTimestamp }));
};

const barColors = {
    upColor: COLORS.GREEN,
    downColor: COLORS.RED,
    borderDownColor: COLORS.RED,
    borderUpColor: COLORS.GREEN,
    wickDownColor: '#838ca1',
    wickUpColor: '#838ca1',
};

export const ChartComponent: FC<ChartProps> = ({ data, type, withVolume = false }) => {
    const chartContainerRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (chartContainerRef.current) {
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: 300,
                crosshair: {
                    mode: CrosshairMode.Normal,
                },
                localization: {
                    priceFormatter: (price) => `${price.toFixed(2)} $`,
                },
            });
            chart.timeScale().fitContent();

            const handleResize = () => {
                if (chartContainerRef.current) {
                    chart.applyOptions({ width: chartContainerRef.current.clientWidth });
                }
            };

            let series;

            if (type === 'bar') {
                series = chart.addBarSeries({ ...barColors });
            }

            if (type === 'candle') {
                series = chart.addCandlestickSeries({ ...barColors });
            }

            if (type === 'line') {
                series = chart.addLineSeries({ color: CommunicationColors.primary });
            }

            if (type === 'area') {
                series = chart.addAreaSeries({
                    lineColor: CommunicationColors.primary,
                    topColor: CommunicationColors.tint20,
                    bottomColor: NeutralColors.white,
                });
            }

            series.setData(prepareData(type, data));

            if (withVolume) {
                const volumeSeries = chart.addHistogramSeries({
                    color: CommunicationColors.primary,
                    priceFormat: {
                        type: 'volume',
                    },
                    priceScaleId: '',
                    scaleMargins: {
                        top: 0.8,
                        bottom: 0,
                    },
                });

                volumeSeries.setData(prepareData('volume', data));
            }

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        }
    }, [data, type, withVolume]);

    return <div ref={chartContainerRef} />;
};
