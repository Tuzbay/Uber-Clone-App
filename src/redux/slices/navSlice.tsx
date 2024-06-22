import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

type SetOriginAction = {
  location: any;
  description: any;
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state: any, action: { payload: SetOriginAction }): void => {
      state.origin = action.payload;
    },
    setDestination: (
      state: any,
      action: { payload: SetOriginAction }
    ): void => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state: any, action: any) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// ^ Selectors ^ \\
export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
