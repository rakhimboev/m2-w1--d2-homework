$(document).ready(function () {
  const data = {
    title: "Calories Comparison of Popular Burgers",
    heading: "Type",
    head1: "BigMac",
    head2: "Whopper",
    head3: "Dave's Double",
    head4: "Whataburger",
    subheadcal: "Calories",
    cal1: "563",
    cal2: "677",
    cal3: "870",
    cal4: "590",
    subheadfat: "Fat",
    fat1: "30gm",
    fat2: "40gm",
    fat3: "51gm",
    fat4: "25gm",
    subheadven: "Vendor",
    ven1: "MacD",
    ven2: "Burger King",
    ven3: "Wendys",
    ven4: "Whataburger",
  };

  $("#btn").click(function () {
    $("table").empty();

    $("table").append(`
        <caption>${data.title}</caption>
        <thead>
          <tr>
            <th>${data.heading}</th>
            <th>${data.head1}</th>
            <th>${data.head2}</th>
            <th>${data.head3}</th>
            <th>${data.head4}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.subheadcal}</td>
            <td>${data.cal1}</td>
            <td>${data.cal2}</td>
            <td>${data.cal3}</td>
            <td>${data.cal4}</td>
          </tr>
          <tr>
            <td>${data.subheadfat}</td>
            <td>${data.fat1}</td>
            <td>${data.fat2}</td>
            <td>${data.fat3}</td>
            <td>${data.fat4}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>${data.subheadven}</td>
            <td>${data.ven1}</td>
            <td>${data.ven2}</td>
            <td>${data.ven3}</td>
            <td>${data.ven4}</td>
          </tr>
        </tfoot>
      `);
  });
});
