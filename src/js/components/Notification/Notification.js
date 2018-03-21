import React from 'react';
import { notification, Icon } from 'antd';

export const openAdNotification = title => {
  notification.open({
    message: `Du har skapat annonsen: ${title}`,
    description: '',
    icon: <Icon type="smile-circle" style={{ color: '#327c32' }} />,
    duration: 8
  });
};

export const removedAdNotification = id => {
  notification.open({
    message: `Du har raderat annonsen med id: ${id}`,
    description: '...men du kan alltid skapa en ny!',
    icon: <Icon type="meh-o" style={{ color: '#327c32' }} />,
    duration: 8
  });
};

export const errorWhenAddingSocialMedia = () => {
  notification.open({
    message: `Något gick snett när du försökte lägga till information.`,
    description: 'Formatet på adressen måste matcha: https://instagram.com/användare',
    icon: <Icon type="frown" style={{ color: '#327c32' }} />,
    duration: 8
  });
};
