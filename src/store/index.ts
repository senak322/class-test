import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // сюда добавляем ваши редьюсеры
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;