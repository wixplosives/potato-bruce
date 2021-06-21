declare module '*.st.css' {
    export * from '@stylable/runtime/stylesheet';

    const defaultExport: unknown;
    export default defaultExport;
}

declare module '*.svg' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.css' {
    const stylesheet: void;
    export default stylesheet;
}
