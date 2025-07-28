export const passions = [
    {
        id: '90skid',
        label: "'90s kid"
    },
    {
        id: 'potter',
        label: "Harry Potter"
    },
    {
        id: 'soundcloud',
        label: "SoundCloud"
    },
    {
        id: 'instagram',
        label: "Instagram"
    },
    {
        id: 'hockey',
        label: "Hockey"
    },
    {
        id: 'backetball',
        label: "Backetball"
    },
    {
        id: 'kpop',
        label: "K-Pop"
    },
    {
        id: 'jpop',
        label: "J-Pop"
    },
    {
        id: 'freelance',
        label: "Freelance"
    },
    {
        id: 'shisha',
        label: "Shisha"
    }
] as const;

export type PassionType = (typeof passions)[number];