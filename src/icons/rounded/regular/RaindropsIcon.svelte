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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 24a6.006 6.006 0 0 1-6-6c0-1.56 1.2-4.045 3.552-7.388a3.016 3.016 0 0 1 4.9 0C17.805 13.955 19 16.44 19 18a6.006 6.006 0 0 1-6 6Zm0-12.657a.98.98 0 0 0-.813.422C9.311 15.844 9 17.484 9 18a4 4 0 0 0 8 0c0-.516-.311-2.156-3.187-6.235a.98.98 0 0 0-.813-.422ZM5 11a5.006 5.006 0 0 1-5-5c0-1.26.842-2.855 2.574-4.877a3.2 3.2 0 0 1 4.852 0C9.158 3.143 10 4.738 10 6a5.006 5.006 0 0 1-5 5Zm0-9a1.173 1.173 0 0 0-.906.421C2.151 4.689 2 5.732 2 6a3 3 0 0 0 6 0c0-.266-.151-1.309-2.094-3.576A1.171 1.171 0 0 0 5 2ZM19.5 9.964a4.505 4.505 0 0 1-4.5-4.5c0-1.091.7-2.506 2.146-4.326a3.02 3.02 0 0 1 4.708 0C23.3 2.958 24 4.373 24 5.464a4.505 4.505 0 0 1-4.5 4.5ZM19.5 2a1 1 0 0 0-.787.381C17.123 4.385 17 5.247 17 5.464a2.5 2.5 0 0 0 5 0c0-.217-.123-1.079-1.713-3.082A1 1 0 0 0 19.5 2Z"/></svg>
  