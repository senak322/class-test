import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: 'ru' | 'en';
}

const initialState: LanguageState = {
  language: 'ru'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'ru' | 'en'>) {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;