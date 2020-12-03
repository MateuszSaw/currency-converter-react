import React from 'react';
import { DisplayClock } from './styled';
import { useCurrentDate } from './useCurrentDate';

const formatDate = (date) => date.toLocaleString(undefined, {
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  day: "numeric",
  month: "long"
});

const Clock = () => {
  const date = useCurrentDate();
  return (
    <DisplayClock>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </DisplayClock>
    );
}
export default Clock;