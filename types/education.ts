export interface EducationItemDetail {
    heading: string;
    text: string;
}

export interface EducationSectionProps {
    heading: string;
    year: string;
    info: EducationItemDetail[];
    diplomaImage?: string;
}
