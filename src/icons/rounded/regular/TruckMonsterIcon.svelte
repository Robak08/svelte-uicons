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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 17h-.1a4.952 4.952 0 0 0-.729-1.756l.073-.073a1 1 0 0 0-1.414-1.414l-.073.073A4.952 4.952 0 0 0 19 13.1V13a1 1 0 0 0-2 0v.1a4.952 4.952 0 0 0-1.756.729l-.073-.073a1 1 0 0 0-1.414 1.414l.073.073A4.952 4.952 0 0 0 13.1 17h-2.2a4.952 4.952 0 0 0-.729-1.756l.073-.073a1 1 0 0 0-1.414-1.414l-.073.073A4.952 4.952 0 0 0 7 13.1V13a1 1 0 0 0-2 0v.1a4.952 4.952 0 0 0-1.756.729l-.073-.073a1 1 0 0 0-1.414 1.414l.073.073A4.952 4.952 0 0 0 1.1 17H1a1 1 0 0 0 0 2h.1a4.952 4.952 0 0 0 .729 1.756l-.073.073a1 1 0 0 0 1.414 1.414l.073-.073A4.952 4.952 0 0 0 5 22.9v.1a1 1 0 0 0 2 0v-.1a4.952 4.952 0 0 0 1.756-.729l.073.073a1 1 0 0 0 1.414-1.414l-.073-.073A4.952 4.952 0 0 0 10.9 19h2.2a4.952 4.952 0 0 0 .729 1.756l-.073.073a1 1 0 0 0 1.414 1.414l.073-.073A4.952 4.952 0 0 0 17 22.9v.1a1 1 0 0 0 2 0v-.1a4.952 4.952 0 0 0 1.756-.729l.073.073a1 1 0 0 0 1.414-1.414l-.073-.073A4.952 4.952 0 0 0 22.9 19h.1a1 1 0 0 0 0-2Zm-5 4a3 3 0 0 1 0-6 3 3 0 0 1 0 6ZM6 21a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm-5-9a1 1 0 0 0 1-1 2 2 0 0 1 2-2h16a2 2 0 0 1 2 2 1 1 0 0 0 2 0 4.006 4.006 0 0 0-3.493-3.968l-4.1-5.148A4.973 4.973 0 0 0 12.5 0H12a3 3 0 0 0-3 3v4H4a4 4 0 0 0-4 4 1 1 0 0 0 1 1Zm10-9a1 1 0 0 1 1-1h.5a2.984 2.984 0 0 1 2.346 1.13L17.925 7H11Z"/></svg>
  