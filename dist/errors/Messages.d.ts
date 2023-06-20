declare const Messages: {
    [x: string]: string | ((placeName: string) => string);
};
declare const AxiosMessages: {
    [x: string]: string;
};
export default Messages;
export { AxiosMessages };
