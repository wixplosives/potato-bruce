export type Mood = string; //'happy' | 'shy' | 'dealWithIt' | 'reset';
export type Backdrop = 'paris' | 'wixhq' | 'default';
export type Size = 'small' | 'big';

export interface NavBarProps {
  size: Size;
  backdrop: Backdrop;
  mood: Mood;
  handleMoodChange: any;
  handleSizeChange: any;
  handleBackdropChange: any;
  resetAll: any;
}