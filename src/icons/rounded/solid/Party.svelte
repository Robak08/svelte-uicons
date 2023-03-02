<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 0h6a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v2.056a9.948 9.948 0 0 1 2 .405v4.69C14.017 9.053 13.008 9 12 9s-2.017.053-3 .151v-4.69a9.948 9.948 0 0 1 2-.405V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM2 14c0 .82 1.879 1.927 5 2.541v-5.082C3.879 12.073 2 13.18 2 14Zm15-8.647v4.072a15.949 15.949 0 0 1 4.473 1.4A10.033 10.033 0 0 0 17 5.353ZM9 11.16v5.68a27.78 27.78 0 0 0 3 .16 27.78 27.78 0 0 0 3-.16v-5.68a28.2 28.2 0 0 0-6 0Zm8 .3v5.082c3.121-.614 5-1.721 5-2.541s-1.879-1.928-5-2.542Zm-8 7.39v4.69a9.992 9.992 0 0 0 6 0v-4.69a29.758 29.758 0 0 1-6-.001Zm8 3.8a10.033 10.033 0 0 0 4.473-5.468A15.949 15.949 0 0 1 17 18.575Zm-10 0v-4.075a15.949 15.949 0 0 1-4.473-1.4A10.033 10.033 0 0 0 7 22.647ZM2.527 10.821A15.949 15.949 0 0 1 7 9.425V5.353a10.033 10.033 0 0 0-4.473 5.468Z"/></svg>
  