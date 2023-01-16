import allRentals from '../data/logements.json';

export const getAllRentals = () => {
    return allRentals;
}

export const getRental = (id) => {
    return allRentals.find(e => e.id === id);
}