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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 0C6.935 0 2 4.037 2 9a7.544 7.544 0 0 0 .685 3.107 2.939 2.939 0 0 0-.435 3.072A6.976 6.976 0 0 0 0 20a3.888 3.888 0 0 0 4 4 1 1 0 0 0 .008-2A1.885 1.885 0 0 1 2 20a5.04 5.04 0 0 1 1.683-3.426 10.823 10.823 0 0 0 3.43.435c.3 0 .577-.007.843-.016A13.048 13.048 0 0 0 13 18c6.065 0 11-4.037 11-9s-4.935-9-11-9zM4.29 14.688a.986.986 0 0 1 0-1.4.985.985 0 0 1 1.4 0A8.432 8.432 0 0 1 6.737 15a7.448 7.448 0 0 1-2.447-.312zM13 16a11.119 11.119 0 0 1-3.907-.712A14.454 14.454 0 0 0 7.1 11.876a3.042 3.042 0 0 0-2.691-.795A5.535 5.535 0 0 1 4 9c0-3.859 4.037-7 9-7s9 3.141 9 7-4.037 7-9 7z"/></svg>
  