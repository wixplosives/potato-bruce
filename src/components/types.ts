export type Mood = string; //'happy' | 'sad' | 'glasses' | 'reset';
export type Backdrop = 'paris' | 'wixhq' | 'perspective' | 'blank';
export type Size = 'small' | 'big';

export interface NavBarProps {
  handleMoodChange: any;
  handleSizeChange: any;
  handleBackdropChange: any;
  resetAll: any;
}