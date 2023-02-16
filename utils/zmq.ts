import { ZmqRequest } from "../ts/zmq/generic";

export const getZmqRoutingId = (frames: Buffer[]) => {
  let routingId: string | null = null;

  try {
    routingId = frames[0].toString();
  } catch (err) {
    console.error(err);
  }

  return routingId;
};

export const getZmqData = (frames: Buffer[], index: number) => {
  let data: ZmqRequest | null = null;

  try {
    data = JSON.parse(frames[index].toString());
  } catch (err) {
    console.error(err);
  }

  return data;
};

export const serialiseZmqRequest = (type: string, data: Record<any, any>) =>
  JSON.stringify({
    type,
    data,
  });
