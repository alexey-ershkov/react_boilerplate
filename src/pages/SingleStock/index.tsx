import { StockCandle } from 'besthack_exchange_api_typings_and_utils';
import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useStockBySymbolQuery, useStockCandlesQuery } from '../../api';
import { ChartComponent, ChartType } from '../../components/Chart';
import { CommandBar } from './CommadBar';

export const SingleStock: FC = () => {
    const { symbol } = useParams<{ symbol: string }>();
    const { data: stockData } = useStockBySymbolQuery({ symbol });
    const { data: candlesData, isLoading } = useStockCandlesQuery({ symbol });

    const [type, setType] = useState<ChartType>('candle');
    const [withVolume, setWithVolume] = useState<boolean>(false);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (candlesData.data[0].candles === 'Data not found') {
        return <div>No data found</div>;
    }

    // map((v: StockCandle & { value: number }) => ({
    //     time: v.time,
    //     value: v.value,
    //     close: v.close,
    // }));

    // console.log(initialData, prepData);

    return (
        <>
            <CommandBar
                currVolume={withVolume}
                currentChart={type}
                onVolumeChange={() => setWithVolume(!withVolume)}
                onTypeChange={(newType) => setType(newType)}
            />
            <ChartComponent
                withVolume={withVolume}
                type={type}
                data={candlesData.data[0].candles as StockCandle[]}
            />
        </>
    );
};
