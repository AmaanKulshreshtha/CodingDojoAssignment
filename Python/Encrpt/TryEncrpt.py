import hashlib
import md5


m = hashlib.md5()
m.update("Nobody inspects")
m.update("the spammish repetition")

pw = 'woailanqiu8'
result = hashlib.sha256(pw)

encrypted_password = md5.new(pw).hexdigest();
print result

