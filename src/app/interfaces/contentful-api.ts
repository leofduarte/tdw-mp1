interface ContentfulPostFields {
    title: string;
    description: string;
    slug: string;
    date: string;
    image: {
        fields: {
            file: {
            url: string;
            };
        };
        };
  }
  
export interface ContentfulPostItem {
    fields: ContentfulPostFields;
    sys: {
      id: string;
      contentType: string;
      }
  }