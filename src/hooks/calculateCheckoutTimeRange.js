export function calculateCheckoutTimeRange({ startTime, timeAlloted }) {
  const splitTimeAlloted = timeAlloted.split(" ");
  const splitStartTime = startTime.split(" ");

  const timeAllotedHrs = Number(splitTimeAlloted[0]);
  const timeAllotedMin = Number(splitTimeAlloted[2]);

  const timeMerdian = splitStartTime[1];

  const splitStartTimeMinAndHrs = splitStartTime[0].split(":");
  let startTimeHrs = Number(splitStartTimeMinAndHrs[0]);
  let startTimeMin = Number(splitStartTimeMinAndHrs[1]);

  startTimeHrs += timeAllotedHrs;

  startTimeMin += timeAllotedMin;

  if (startTimeMin >= 60) {
    const minToHrs = startTimeMin / 60;

    if (startTimeMin % 60 === 0) {
      startTimeHrs += minToHrs;
      startTimeMin -= minToHrs * 60;
    }
  }

  if (startTimeHrs > 12 && startTimeHrs !== 24) {
    return `${(startTimeHrs -= 12)}:${startTimeMin.toString().padStart(2, 0)} PM`;
  } else if (startTimeHrs === 12) {
    return `${startTimeHrs}:${startTimeMin.toString().padStart(2, 0)} PM`;
  } else if (startTimeHrs === 24) {
    return `${(startTimeHrs -= 12)}:${startTimeMin.toString().padStart(2, 0)} AM`;
  } else if (startTimeHrs < 12) {
    return `${startTimeHrs}:${startTimeMin.toString().padStart(2, 0)} AM`;
  }
}
