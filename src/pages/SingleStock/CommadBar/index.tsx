import { CommandBar as FluentCommandBar, ICommandBarItemProps } from '@fluentui/react';
import React, { FC } from 'react';

import { ChartType } from '../../../components/Chart';

interface CommandBarProps {
    currentChart: ChartType;
    currVolume: boolean;
    onTypeChange: (newType: ChartType) => void;
    onVolumeChange: () => void;
}

const getName = (chartType: ChartType): string => {
    if (chartType === 'candle') {
        return 'Candle Chart';
    }

    if (chartType === 'bar') {
        return 'Bar Chart';
    }

    if (chartType === 'line') {
        return 'Line Chart';
    }

    if (chartType === 'area') {
        return 'Area Chart';
    }

    return 'Type';
};

const getIconName = (chartType: ChartType): string => {
    if (chartType === 'candle') {
        return 'AlignVerticalCenter';
    }

    if (chartType === 'bar') {
        return 'GripperBarVertical';
    }

    if (chartType === 'line') {
        return 'LineChart';
    }

    return 'AreaChart';
};

const getItems = (
    currentChart: ChartType,
    items: ICommandBarItemProps[],
): ICommandBarItemProps[] => {
    return items.filter((item) => item.key !== currentChart);
};

export const CommandBar: FC<CommandBarProps> = ({
    currentChart,
    onTypeChange,
    currVolume,
    onVolumeChange,
}) => {
    const subItems: ICommandBarItemProps[] = [
        {
            key: 'area',
            text: getName('area'),
            onClick: () => onTypeChange('area'),
            iconProps: { iconName: getIconName('area') },
        },
        {
            key: 'bar',
            text: getName('bar'),
            onClick: () => onTypeChange('bar'),
            iconProps: { iconName: getIconName('bar') },
        },
        {
            key: 'candle',
            text: getName('candle'),
            onClick: () => onTypeChange('candle'),
            iconProps: { iconName: getIconName('candle') },
        },
        {
            key: 'line',
            text: getName('line'),
            onClick: () => onTypeChange('line'),
            iconProps: { iconName: getIconName('line') },
        },
    ];

    const items: ICommandBarItemProps[] = [
        {
            key: 'chartType',
            text: getName(currentChart),
            iconProps: { iconName: getIconName(currentChart) },
            subMenuProps: { items: getItems(currentChart, subItems) },
        },
        {
            key: 'withVolume',
            text: currVolume ? 'Hide volume' : 'Show volume',
            iconProps: { iconName: currVolume ? 'BarChartVerticalFill' : 'BarChartVertical' },
            onClick: onVolumeChange,
        },
    ];

    return <FluentCommandBar items={items} />;
};
