# Sentinic

A web-based application that will be able to scrape online reviews and make accurate predictions using machine learning models.

### Working of Sentinic :
1. User can run the sentiment analysis on a product from the given choices or he/she can feed 
in the amazon URL of a new product. <br>
2. Once the product is selected then the reviews are scraped from amazon. <br>
3. This scraped data is preprocessed. Preprocessing involves handling missing data, removing 
punctuations, removing stop words, tokenization and lemmatization. <br>
4. Next the features are extracted using TF-IDF vectorizer. <br>
5. Then 3 classification algorithms namely Support Vector Machine, Logistic Regression and 
Random Forest are applied on extracted features. <br>
6. These algorithms predict the sentiment, 1 for positive and 0 for negative and send this data 
to the frontend. <br>
7. Visualizations including overall sentiment and sentiment over time are displayed to the 
user. <br>

Note- if you want to try sentinic out, then you need to enter the url that you get after you click on *show all reviews* link on the amazon product page.

### Demo :






https://user-images.githubusercontent.com/89638054/166449687-5c1a2a28-138f-48d0-9e4a-4b0b53daba84.mp4




