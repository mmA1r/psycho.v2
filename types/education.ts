export interface EducationItemDetail {
    heading: string;
    text: string;
}

export interface Diploma { folder: string, alt: string }

export interface EducationSectionProps {
    heading: string;
    year: string;
    info: EducationItemDetail[];
    diploma?: Diploma;
}
