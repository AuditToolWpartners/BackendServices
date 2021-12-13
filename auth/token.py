import base64
#Need to figure out how to create SHA256 with User.id

def Encoder(UserModelName):
    content = UserModelName
    print(content)
    asciimessage = content.encode('ascii')
    base64_bytes = base64.b64encode(asciimessage)
    return(base64_bytes)


def Decoder(base64_bytes):
    clean = base64.b64decode(base64_bytes)
    print(clean)
    return clean


def URLCreator(UserID):
    encodedid = Encoder(UserID)
    url = f'WPartner/auth/emailverify/{encodedid}'
    return url











    