import { query } from './index.js';

export const getMembers = async () => {
    const response = await query('SELECT * FROM members');
    return response.rows;
}

export const postMember = async () => {

}

export const updateMember = async () => {

}