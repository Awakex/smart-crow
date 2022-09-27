import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useNotificationQueue = () => {
    const [queue, setQueue] = useState([]);
    const [activeNotification, setActiveNotification] = useState(null);

    useEffect(() => {
        if (!queue.length) {
            setActiveNotification(null);
            return;
        }

        let notificationWithHighestPriority = queue.reduce((max, notification) =>
            max.priority ? max : notification
        );

        setActiveNotification(notificationWithHighestPriority.component);
    }, [queue]);

    const addNotificationInQueue = (priority, component) => {
        setQueue((prev) => [...prev, { component, priority }]);
    };

    const removeNotificationFromQueue = (componentKey) => {
        let updatedQueue = queue;

        updatedQueue = updatedQueue.filter(
            (notification) => notification.component.key != componentKey
        );

        setQueue(updatedQueue);
    };

    return {
        addNotificationInQueue,
        removeNotificationFromQueue,
        activeNotification,
    };
};

export default useNotificationQueue;
