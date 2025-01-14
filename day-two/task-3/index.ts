interface SourceData {
    title: string;
    year: number;
    author: string;
}

interface TargetData {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
}

function createBook(title: string, year: number, author: string): TargetData {
    return {
        title: title,
        year: year,
        author: author,
        preview: `Название: ${title}, Автор: ${author}, Год: ${year}`,
        url: `www.someurl.com/preview?title=${encodeURIComponent(title)}&year=${year}&author=${encodeURIComponent(author)}`,
    };
}


const source: SourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

const target = createBook(source.title, source.year, source.author);
console.log(target);
