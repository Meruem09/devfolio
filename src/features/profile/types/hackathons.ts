export type Hackathons = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  image?: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
    /** Location of the hackathon where it held*/
  location: string;
    /**Description of the project, what i build in the hackathon*/
  description: string;
};