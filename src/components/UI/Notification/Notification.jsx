import { useDispatch, useSelector } from "react-redux";
import useGetNotification from "../../../hooks/useGetNotification";
import { useEffect, useState } from "react";
import { setShowNotification } from "../../../redux/features/global/globalSlice";

const Notification = () => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  const dispatch = useDispatch();
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { showNotification } = useSelector((state) => state.global);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      dispatch(setShowNotification(true));

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        dispatch(setShowNotification(true));
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    dispatch,
  ]);

  const closeNotification = () => {
    const notificationIds =
      JSON.parse(localStorage.getItem("notificationId")) || [];

    notification?.forEach((item) => {
      if (!notificationIds.some((notif) => notif.id === item.id)) {
        notificationIds.push({ id: item.id });
      }
    });

    localStorage.setItem("notificationId", JSON.stringify(notificationIds));

    dispatch(setShowNotification(false));
  };
  return (
    <div className="latest-events announcements ng-star-inserted">
      <div className="ann-wrap">
        <div
          role="img"
          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
          aria-hidden="true"
          data-mat-icon-type="font"
        >
          campaign
        </div>

        <marquee
          width="100%"
          direction="left"
          height="auto"
          className="ng-star-inserted"
        >
          {filteredNotification?.map((item) => (
            <span style={{ marginLeft: "500px" }} key={item?.id}>
              {item?.text}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default Notification;
