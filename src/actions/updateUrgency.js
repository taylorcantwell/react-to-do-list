const updateUrgency = (id, urgency) => {
    console.log('triggered update urgency');
    return { type: 'UPDATE_URGENCY', payload: { id, urgency } };
};

export default updateUrgency;
