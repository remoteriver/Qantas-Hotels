// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { HomePageState } from 'app/pages/HomePage/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  homepageState?: HomePageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
