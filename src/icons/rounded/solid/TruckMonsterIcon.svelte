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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 17h-.1a4.952 4.952 0 0 0-.729-1.756l.073-.073a1 1 0 0 0-1.414-1.414l-.073.073A4.952 4.952 0 0 0 19 13.1V13a1 1 0 0 0-2 0v.1a4.952 4.952 0 0 0-1.756.729l-.073-.073a1 1 0 0 0-1.414 1.414l.073.073A4.952 4.952 0 0 0 13.1 17h-2.2a4.952 4.952 0 0 0-.729-1.756l.073-.073a1 1 0 0 0-1.414-1.414l-.073.073A4.952 4.952 0 0 0 7 13.1V13a1 1 0 0 0-2 0v.1a4.952 4.952 0 0 0-1.756.729l-.073-.073a1 1 0 0 0-1.414 1.414l.073.073A4.952 4.952 0 0 0 1.1 17H1a1 1 0 0 0 0 2h.1a4.952 4.952 0 0 0 .729 1.756l-.073.073a1 1 0 0 0 1.414 1.414l.073-.073A4.952 4.952 0 0 0 5 22.9v.1a1 1 0 0 0 2 0v-.1a4.952 4.952 0 0 0 1.756-.729l.073.073a1 1 0 0 0 1.414-1.414l-.073-.073A4.952 4.952 0 0 0 10.9 19h2.2a4.952 4.952 0 0 0 .729 1.756l-.073.073a1 1 0 0 0 1.414 1.414l.073-.073A4.952 4.952 0 0 0 17 22.9v.1a1 1 0 0 0 2 0v-.1a4.952 4.952 0 0 0 1.756-.729l.073.073a1 1 0 0 0 1.414-1.414l-.073-.073A4.952 4.952 0 0 0 22.9 19h.1a1 1 0 0 0 0-2ZM6 19a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm12 0a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm1.685-13H9V2.5A2.5 2.5 0 0 1 11.5 0h1a5 5 0 0 1 3.91 1.884ZM6 10a7.98 7.98 0 0 0-6 2.709V11a3 3 0 0 1 3-3h17a4.112 4.112 0 0 1 4 4.709c-2.865-3.554-9.135-3.554-12 0A7.98 7.98 0 0 0 6 10Z"/></svg>
  