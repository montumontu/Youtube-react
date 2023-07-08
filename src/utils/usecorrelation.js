import { v4 as uuidv4 } from 'uuid';
import { setCorrelationId } from "./appSlice";
import { useSelector, useDispatch } from "react-redux";



function useCorrelation() {
  console.log("useCorrelation id start");
  const correlation = useSelector(store => store.app.correlation)
  const dispatch = useDispatch();

  function generateCorrelationId() {
    console.log("correlationObjectgenerate");
    const correlationObject = {
      id: uuidv4(),
      timestamp: new Date().getTime(), // Current timestamp in milliseconds
    };
    console.log("correlationObjectgenerate", JSON.stringify(correlationObject));
    dispatch(setCorrelationId(correlationObject));
    storeInLocalStorage("correlationobject", correlationObject);
    return correlationObject.id;
  }

  function getCorrelationId() {
    console.log("correlationObjectget");
    let correlationId = {};
    if (correlation?.id && correlation?.timestamp && isCorrelationActive(correlation.timestamp)) {
      return correlation.id;
    }
    correlationId = getCorrelationIdFromLocalStorage();
    if (correlationId) {
      return correlationId;
    }
    correlationId = generateCorrelationId();
    return correlationId;
  }

  function storeInLocalStorage(key, value) {  // Create a correlation ID object with timestamp
    console.log("correlationObjectLocalstore");
    localStorage.setItem(key, JSON.stringify(value));
  }

  function isCorrelationActive(storedTimestamp) {
    console.log("correlationObjectActive");
    const currentTimestamp = new Date().getTime();
    const timeDifference = currentTimestamp - storedTimestamp;
    const expirationTime = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    if (timeDifference >= expirationTime) {
      return false;
    }
    return true;
  }


  function getCorrelationIdFromLocalStorage() {
    console.log("correlationObjectLocalget");
    const correlationIdObject = JSON.parse(localStorage.getItem('correlationId'));
    if (!correlationIdObject?.id || !correlationIdObject?.timestamp) {
      return null;
    }
    const correlationActive = isCorrelationActive(correlationIdObject.timestamp);
    if (correlationActive) {
      return correlationIdObject;
    }
    return null;
  }
  const correlationId = getCorrelationId();
  return correlationId;
}

export default useCorrelation;
