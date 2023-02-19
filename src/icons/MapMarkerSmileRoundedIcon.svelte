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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-map-marker-smile {customClass}"><path d="M12 24a5.416 5.416 0 0 1-3.807-1.552L4.25 18.805C2.144 16.7 1 13.938 1 11s1.144-5.701 3.222-7.778C6.299 1.145 9.062 0 12 0s5.7 1.145 7.778 3.222C21.856 5.299 23 8.061 23 11s-1.145 5.7-3.222 7.778l-3.992 3.689A5.399 5.399 0 0 1 11.999 24Zm0-22a8.94 8.94 0 0 0-6.364 2.636C3.936 6.336 3 8.595 3 11s.936 4.664 2.636 6.364l3.935 3.635c1.336 1.306 3.543 1.286 4.837.02l3.984-3.682C20.063 15.664 21 13.404 21 11.001s-.937-4.664-2.636-6.364A8.94 8.94 0 0 0 12 2.001Zm4.707 11.05a.999.999 0 1 0-1.414-1.414C14.414 12.515 13.244 13 12 13s-2.414-.484-3.293-1.364a.999.999 0 1 0-1.414 1.414C8.55 14.307 10.222 15 12 15s3.45-.692 4.707-1.95ZM9.5 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9.5 7Zm5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 14.5 7Z"/></svg>
  