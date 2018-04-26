export type Mood = string; //'happy' | 'sad' | 'glasses' | 'reset';
export type Backdrop = 'blank' | 'paris' | 'wixhq' | 'aliens';
export type Size = 'small' | 'big';

export interface NavBarProps {
  handleMoodChange: any;
  handleSizeChange: any;
  handleBackdropChange: any;
  resetAll: any;
}