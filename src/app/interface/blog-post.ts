export interface BlogPost {
    userId: string;
    blogContent: object;  // or a more specific type if you have a defined structure
    tags: string[];       // Array of strings for tags
  }
  