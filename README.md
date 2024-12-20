This website is a simple directory search of SMS Headers which will help you to identify the source of the SMS you receive. The SMS service in India is regulated by TRAI(Telecom Regulatory Authority of India) and companies have to register themselves to TRAI before sending promotional or Transactional SMS to its users. TRAI assigns unique codes to companies to send commercial messages.

The format of the code which we often see as the sender of SMS is, **XY-ABCEDF**, where:

*   **X** is a single alphabet code assigned for the **Telecom Service Provider** (TSP).
*   **Y** is a single alphabet code assigned for the **License Service Area** (LSA) of the **Originating Access Provider** (OAP)
*   **ABCDEF** is a six-character alpha-numeric code assigned to a registered Principal entity.

Here is the list of telecom Service Providers

<figure class="wp-block-table">

<table>

<tbody>

<tr>

<td>S.No.</td>

<td>Name of Service Providers</td>

<td>Code Allocated</td>

</tr>

<tr>

<td>1</td>

<td>Aircel Ltd/ Dishnet Wireless Ltd</td>

<td>D</td>

</tr>

<tr>

<td>2</td>

<td>Bharti Airtel Ltd/ Bharti Hexacom Ltd</td>

<td>A</td>

</tr>

<tr>

<td>3</td>

<td>Bharat Sanchar Nigam Ltd</td>

<td>B</td>

</tr>

<tr>

<td>4</td>

<td>Quadrant Televentures Limited</td>

<td>Q</td>

</tr>

<tr>

<td>5</td>

<td>Mahanagar Telephone Nigam Ltd</td>

<td>M</td>

</tr>

<tr>

<td>6</td>

<td>Reliance Communications Ltd</td>

<td>R</td>

</tr>

<tr>

<td>7</td>

<td>Reliance Jio Infocomm Ltd</td>

<td>J</td>

</tr>

<tr>

<td>8</td>

<td>Reliance Telecom Ltd</td>

<td>E</td>

</tr>

<tr>

<td>9</td>

<td>Tata Teleservices Ltd/ Tata Teleservices (Mah)  
Ltd</td>

<td>T</td>

</tr>

<tr>

<td>10</td>

<td>Vodafone Idea Ltd.</td>

<td>V</td>

</tr>

<tr>

<td>11</td>

<td>V-CON Mobile & Infra Private Ltd.</td>

<td>C</td>

</tr>

</tbody>

</table>

<figcaption class="wp-element-caption">LIST OF CODES FOR SERVICE PROVIDERS (‘X’)</figcaption>

</figure>

Here is a list of Service Area Code from where the message is originated.

<figure class="wp-block-table">

<table>

<thead>

<tr>

<th>S.No.</th>

<th>Service Area</th>

<th>Code</th>

</tr>

</thead>

<tbody>

<tr>

<td>1.</td>

<td>Andhra Pradesh</td>

<td>A</td>

</tr>

<tr>

<td>2.</td>

<td>Assam</td>

<td>S</td>

</tr>

<tr>

<td>3.</td>

<td>Bihar</td>

<td>B</td>

</tr>

<tr>

<td>4.</td>

<td>Delhi</td>

<td>D</td>

</tr>

<tr>

<td>5.</td>

<td>Gujarat</td>

<td>G</td>

</tr>

<tr>

<td>6.</td>

<td>Haryana</td>

<td>H</td>

</tr>

<tr>

<td>7.</td>

<td>Himachal Pradesh</td>

<td>I</td>

</tr>

<tr>

<td>8.</td>

<td>Jammu & Kashmir</td>

<td>J</td>

</tr>

<tr>

<td>9.</td>

<td>Karnataka</td>

<td>X</td>

</tr>

<tr>

<td>10.</td>

<td>Kerala</td>

<td>L</td>

</tr>

<tr>

<td>11.</td>

<td>Kolkata</td>

<td>K</td>

</tr>

<tr>

<td>12.</td>

<td>Madhya Pradesh</td>

<td>Y</td>

</tr>

<tr>

<td>13.</td>

<td>Maharashtra</td>

<td>Z</td>

</tr>

<tr>

<td>14.</td>

<td>Mumbai</td>

<td>M</td>

</tr>

<tr>

<td>15.</td>

<td>North East</td>

<td>N</td>

</tr>

<tr>

<td>16.</td>

<td>Orissa</td>

<td>O</td>

</tr>

<tr>

<td>17.</td>

<td>Punjab</td>

<td>P</td>

</tr>

<tr>

<td>18.</td>

<td>Rajasthan</td>

<td>R</td>

</tr>

<tr>

<td>19.</td>

<td>Tamil Nadu including Chennai</td>

<td>T</td>

</tr>

<tr>

<td>20.</td>

<td>UP-East</td>

<td>E</td>

</tr>

<tr>

<td>21.</td>

<td>UP-West</td>

<td>W</td>

</tr>

<tr>

<td>22.</td>

<td>West Bengal</td>

<td>V</td>

</tr>

</tbody>

</table>

<figcaption class="wp-element-caption">LIST OF CODES FOR SERVICE AREA (‘Y’)</figcaption>

</figure>

Lets do this with a simple example. lets say you recieved a message from **AX-HDFCBK** so the first Char **"A"** provices the TSP which in this case is "Bharti Airtel Ltd/ Bharti Hexacom Ltd" and the second Char X provides the area code from where the message is send which in this case is "Karnataka". now the next part is **HDFCBK**. TRAI has provided a long pdf where the data of these headers are given but to make things easier i have created a tool for you to easily search for the source entitiy of the sms. just go on [https://smswiki-2024.web.app/](https://smswiki-2024.web.app/) and enter HDFCBK and click search. you will see this result which shows the Company Name and other info.

## OUR DATA 

1. TOTAL TRAI SUBMITTED HEADERS - 22192
2. TOTAL HEADERS IN OUR DATABASE - 22192
3. TOTAL HEADERS WITH CIN MAPPED (EXTERNALLY) - 7379

### The project is now live at  [https://smswiki-2024.web.app/](https://smswiki-2024.web.app/)
