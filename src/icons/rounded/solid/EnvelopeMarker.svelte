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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.946 11a2.031 2.031 0 0 1-1.277-.451L19.5 9.613l-1.169.936A2.051 2.051 0 0 1 15 8.948V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v6.948A2.057 2.057 0 0 1 21.946 11ZM12 15.422a3 3 0 0 0 2.122-.876l1.747-1.746A3.857 3.857 0 0 1 13 8.948V3H5A4.986 4.986 0 0 0 .744 5.411l9.134 9.135a3 3 0 0 0 2.122.876ZM23.7 12.6a4.048 4.048 0 0 1-4.2-.425.923.923 0 0 0-.123-.054l-3.841 3.839a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6.57c-.1.057-.192.118-.3.17Z"/></svg>
  