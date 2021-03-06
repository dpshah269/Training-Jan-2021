using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using NewApplication.UnitOfWork.Main;
using NewApplication.Models.Main;
using RxWeb.Core.Security.Cryptography;

namespace NewApplication.Domain.UserModule
{
    public class UserDomain : IUserDomain
    {
        private IPasswordHash passwordHash { get; set; }
        public UserDomain(ILoginUow uow, IPasswordHash passwordHash)
        {
            this.Uow = uow;
            this.passwordHash = passwordHash;
        }
        public Task<object> GetAsync(User user)
        {
            var userList = (object)Uow.Repository<User>().AllInclude(p => p.UserRoles);
            return Task.FromResult(userList);
        }

        public Task<object> GetBy(User parameters)
        {
            var userList = (object)this.Uow.Repository<User>().SingleOrDefault(m => m.UserId == parameters.UserId);
            return Task.FromResult(userList);
        }

        public HashSet<string> AddValidation(User entity)
        {
            return ValidationMessages;
        }
        public async Task AddAsync(User entity)
        {
            PasswordResult result = passwordHash.Encrypt(entity.Password.ToString());
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }
        public HashSet<string> UpdateValidation(User entity)
        {
            return ValidationMessages;
        }
        public async Task UpdateAsync(User entity)
        {
            PasswordResult result = passwordHash.Encrypt(entity.Password.ToString());
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }
        public HashSet<string> DeleteValidation(User parameters)
        {
            return ValidationMessages;
        }
        public Task DeleteAsync(User parameters)
        {
            User user = Uow.Repository<User>().FirstOrDefault(p => p.UserId == parameters.UserId);
            Uow.RegisterDeletedAsync(user);
            return Uow.CommitAsync();
        }

        public ILoginUow Uow { get; set; }
        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }
    public interface IUserDomain : ICoreDomain<User, User> { }
}
