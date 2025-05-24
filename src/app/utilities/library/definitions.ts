// Defining the props for a link button component
export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

export interface ProductUseCardProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    text: string;
    className: string;
    illustration: React.ElementType;
}

export interface WorkflowCardProps {
    step: number;
    title: string;
    description: string;
    icon: React.ElementType;
};

export interface ComplianceChallengesInfoCardProps {
    title: string;
    description: string;
}

export interface ExpertInsightCardProps {
  title: string;
  description: string;
  gradient: string;
  outlineColor: string;
}