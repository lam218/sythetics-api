import React from 'react';

const QueueItem = ({item}) => <div><p>{item.uniQref}</p><p>{item.initation_time}</p><p>{item.name}</p></div>;

export default QueueItem;