import api from './api';

export const getTripById = async (tripId: string) => {
    const response = await api.get(`/trips/${tripId}`);
    return response.data.trip;
};
