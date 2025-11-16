export type AppointmentAdditions = {
    title: string;
    paragraph: string;
};

export type AppointmentItem = {
    title: string;
    text: string;
    icon: Component;
    additions?: Array<AppointmentAdditions>;
}
