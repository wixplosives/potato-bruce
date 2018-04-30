export type Mood = string; //'happy' | 'sad' | 'glasses' | 'reset';
export type Backdrop = 'paris' | 'wixhq' | 'perspective' | 'blank';
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