import Ionicons from "react-native-vector-icons/Ionicons";

export const Back = ({style, color, size}) => <Ionicons name="arrow-back-outline" size={size} color={color} style={style}/>;
export const Person = <Ionicons name="person-outline" size={20} color="#717171" light />;
export const User = <Ionicons name="user" size={25} color="#717171" light />;
export const Notification = <Ionicons name="notifications-outline" size={20} color="#717171" light />;
export const TicketIcon = <Ionicons name="qr-code-outline" size={20} color="#717171" light />;
export const Warning= ({style}) => <Ionicons name="ios-warning-outline" size={20} color="#717171" style={style} light />;
export const Chat = <Ionicons name="ios-chatbubble-ellipses-outline" size={20} color="#717171" light />;
export const News = <Ionicons name="newspaper" size={25} color="#717171" />;
export const Calendar = <Ionicons name="calendar-check" size={25} color="#717171" />;
export const Ad = <Ionicons name="ad" size={20} color="#717171"/>;
export const Direction = <Ionicons name="ios-chevron-forward-outline" size={20} color="#717171" style={{paddingTop: 20}}/>;
export const Icon =({name, size, style, color})=><Ionicons name={name} size={size} color={color} style={style}/>
export const ScanTicket = <Ionicons name="scan-outline" size={20} color="#717171" light/>
export const Calendars = <Ionicons name="calendar-outline" size={25} color="#717171" light style={{marginTop: 5}}/>
export const Time = <Ionicons name="time-outline" size={16} color="#000" light />
export const Location = <Ionicons name="location-outline" size={16} color="#000" light />
