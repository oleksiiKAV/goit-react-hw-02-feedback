import React from 'react';
import { Mess } from 'components/Statistics/Statistics.styled';
function Notification({ message }) {
  return <Mess>{message}</Mess>;
}
Notification.protoTypes = {
  message: PT.string,
};
export default Notification;
