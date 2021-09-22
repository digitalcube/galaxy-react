import { ChartDataSets } from 'chart.js';
import { KeyExclude } from '../../types/type.utils';

export type DatasetOption = Partial<KeyExclude<ChartDataSets, 'data'>>;
