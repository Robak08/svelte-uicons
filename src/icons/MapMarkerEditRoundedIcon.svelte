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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-map-marker-edit {customClass}"><path d="M12 24a5.413 5.413 0 0 1-3.807-1.552L4.25 18.805C2.144 16.7 1 13.938 1 11s1.144-5.701 3.222-7.778C6.3 1.145 9.062 0 12 0s5.7 1.144 7.778 3.222C21.856 5.299 23 8.061 23 11s-1.144 5.7-3.222 7.778l-3.992 3.689A5.395 5.395 0 0 1 12 24Zm0-22a8.94 8.94 0 0 0-6.364 2.636C3.936 6.336 3 8.595 3 11s.936 4.664 2.636 6.364l3.936 3.635c1.336 1.306 3.542 1.286 4.837.02l3.984-3.682C20.065 15.664 21 13.404 21 11.001s-.937-4.664-2.636-6.364A8.943 8.943 0 0 0 12 2.001ZM9.172 16H8a1 1 0 0 1-1-1v-1.171c0-1.335.521-2.591 1.465-3.536l3.414-3.414A3.002 3.002 0 0 1 17 9c0 .801-.313 1.555-.879 2.122l-3.414 3.414A4.966 4.966 0 0 1 9.172 16ZM9 14h.172c.79 0 1.562-.32 2.121-.878l3.414-3.415c.189-.189.293-.44.293-.707s-.104-.518-.293-.707a1 1 0 0 0-1.414 0l-3.414 3.414A2.984 2.984 0 0 0 9 13.829V14Z"/></svg>
  