import React from 'react';
import { notification, Icon } from 'antd';

export const openAdNotification = () => {
  notification.open({
    message: 'Du har skapat annons',
    description: 'jättefint nu hoppas vi du tjänar feta para din kossa',
    icon: <Icon type="smile-circle" style={{ color: '#327c32' }} />
  });
};
