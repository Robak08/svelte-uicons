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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm6.854 17.481c-.356.408-.83.691-1.354.856V23a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2.163c-.524-.165-.998-.447-1.354-.856a2.535 2.535 0 0 1-.622-2.036l1.348-8.796C15.58 7.63 16.925 6 19 6s3.42 1.631 3.63 3.165l1.344 8.766.002.015a2.535 2.535 0 0 1-.622 2.036ZM4 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm4 5v5c0 .883-.391 1.67-1 2.22V23a1 1 0 1 1-2 0v-5H3v5a1 1 0 1 1-2 0v-5.78A2.983 2.983 0 0 1 0 15v-5c0-2.206 1.794-4 4-4s4 1.794 4 4Zm3-10a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/></svg>
  