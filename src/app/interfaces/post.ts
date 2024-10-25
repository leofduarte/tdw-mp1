export interface Post {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      description: string;
      image_url: string;
      date?: Date | string;
      slug: string;
    };
  }