import time 
import random
import sys
from flask import jsonify
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import Select
from flask_cors import CORS
from googlesearch.googlesearch import GoogleSearch

options = Options()
options.headless = True

from flask import Flask

'''def custom(tell):   

    #print ("The script has the name %s" % )

    #sys.arg
    links = []
    driver = webdriver.Firefox(options=options)

    #server = "https://www.google.com/search?q=Yahoo+finance&client=ubuntu&hs=sYJ&channel=fs&biw=1545&bih=911&tbm=nws&sxsrf=ALeKk008G3Lc3Oc7hTQcZIezNKBj-t9ywg%3A1618626128005&ei=T0Z6YI7tPNuutQaMwLHABA&oq=Yahoo+finance&gs_l=psy-ab.3..0j0i433k1j0l7j0i3k1.1076.4809.0.4905.22.8.8.6.7.0.126.553.6j1.8.0....0...1c.1.64.psy-ab..0.21.659.0..0i433i131k1.259.Gi7BVX9UHjw"

    server_bad = ("https://www.google.com/search?q=Yahoo+finance+") + (tell) + "+&client=ubuntu&hs=sYJ&channel=fs&biw=1545&bih=911&tbm=nws&sxsrf=ALeKk008G3Lc3Oc7hTQcZIezNKBj-t9ywg%3A1618626128005&ei=T0Z6YI7tPNuutQaMwLHABA&oq=Yahoo+finance&gs_l=psy-ab.3..0j0i433k1j0l7j0i3k1.1076.4809.0.4905.22.8.8.6.7.0.126.553.6j1.8.0....0...1c.1.64.psy-ab..0.21.659.0..0i433i131k1.259.Gi7BVX9UHjw"

    driver.get(server_bad)

    print("grabbing headers")

    x = 0

    #Title + Send
    while x != 10:
        title = driver.find_elements_by_xpath("//*[@aria-level='2']")[x].text
        
        driver.find_elements_by_xpath("//*[@aria-level='2']")[x].click()

        val2 = driver.find_element_by_xpath("//h1").get_attribute("innerHTML")

        print(val2)
        print(title)
        print (driver.current_url)
        links.append({"title": title, "url": driver.current_url})
        print("_________")
        
        driver.back()
        time.sleep(.01)

        #print(title)
        x+=1
        time.sleep(.01)
    return links'''



app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/", methods=["GET"])
def home():
    data = [{'title' : "gamestop", 'url' : "ffefe.com"}, {'title':"geico", 'url':"frfr.com"}]
    return jsonify(data)

@app.route("/<t>")
def user(t):
    #return f"Hello{val}!"
    response = GoogleSearch().search(t)
    for result in response.results:
        print("Title: " + result.title)
        print("Content: " + result.getText())
    return "<h1>hi</h1>"
    '''data = []
    res = GoogleSearch().search(t)
    for result in res.results:
        data.append({'title' : res.title, 'url' : result})
    return jsonify(data)'''


if __name__ == "__main__":
    app.run()


